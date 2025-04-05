import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { auth, db, storage } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Perfil() {
  const { currentUser } = useAuth();
  console.log("CurrentUser no Perfil:", currentUser); // Log importante
  const navigate = useNavigate();
    // Adicione este log de estado
    console.log("Estado do componente Perfil:", {
        currentUser,
        userData,
        loading,
        editMode
    });
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    about: '',
    photoURL: ''
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  // Debug logs
  useEffect(() => {
    console.log('Current User:', currentUser);
    console.log('User Data:', userData);
    console.log('Form Data:', formData);
  }, [currentUser, userData, formData]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!currentUser) return;
        
        setLoading(true);
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);
          setFormData({
            displayName: data.displayName || currentUser.displayName || '',
            about: data.about || '',
            photoURL: data.photoURL || currentUser.photoURL || ''
          });
        } else {
          // Create user document if doesn't exist
          await updateDoc(doc(db, 'users', currentUser.uid), {
            displayName: currentUser.displayName || '',
            email: currentUser.email,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Erro ao carregar dados do usuário');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      // Validate file type and size
      const file = e.target.files[0];
      if (!file.type.match('image.*')) {
        setError('Por favor, selecione uma imagem válida');
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB
        setError('A imagem deve ter menos de 2MB');
        return;
      }
      setPhotoFile(file);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setUploadProgress(0);

    try {
      let photoURL = formData.photoURL;
      
      // Upload new photo if exists
      if (photoFile) {
        const storageRef = ref(storage, `profilePhotos/${currentUser.uid}/${Date.now()}`);
        const uploadTask = uploadBytes(storageRef, photoFile);
        
        // Track upload progress
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error('Upload error:', error);
            setError('Erro ao fazer upload da imagem');
          }
        );

        await uploadTask;
        photoURL = await getDownloadURL(storageRef);
      }

      // Update Firebase Auth profile
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName.trim(),
        photoURL: photoURL || auth.currentUser.photoURL
      });

      // Update Firestore document
      await updateDoc(doc(db, 'users', currentUser.uid), {
        displayName: formData.displayName.trim(),
        about: formData.about.trim(),
        photoURL: photoURL || userData?.photoURL,
        updatedAt: new Date()
      });

      setSuccess('Perfil atualizado com sucesso!');
      setTimeout(() => {
        setEditMode(false);
        setSuccess('');
      }, 2000);
      
      // Refresh user data
      const updatedDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (updatedDoc.exists()) {
        setUserData(updatedDoc.data());
      }
      
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.message || 'Erro ao atualizar perfil. Tente novamente.');
    } finally {
      setUploadProgress(0);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (err) {
      console.error('Error signing out:', err);
      setError('Erro ao sair da conta');
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="container mt-5 alert alert-warning">
        Por favor, <Link to="/login">faça login</Link> para acessar seu perfil.
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {error && (
            <div className="alert alert-danger alert-dismissible fade show">
              {error}
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setError('')}
              />
            </div>
          )}
          
          {success && (
            <div className="alert alert-success alert-dismissible fade show">
              {success}
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setSuccess('')}
              />
            </div>
          )}

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="mb-3 mb-md-0 me-md-4 position-relative">
                  <img 
                    src={userData?.photoURL || currentUser.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(formData.displayName || 'U')} 
                    className="rounded-circle border" 
                    width="150" 
                    height="150"
                    alt="Foto de perfil"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(formData.displayName || 'U');
                    }}
                  />
                  {editMode && (
                    <>
                      <div className="mt-2">
                        <input 
                          type="file" 
                          onChange={handleFileChange} 
                          className="form-control form-control-sm" 
                          accept="image/*"
                          id="profilePhoto"
                        />
                        <label 
                          htmlFor="profilePhoto" 
                          className="btn btn-sm btn-outline-secondary mt-2 w-100"
                        >
                          Alterar Foto
                        </label>
                      </div>
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="progress mt-2" style={{height: '5px'}}>
                          <div 
                            className="progress-bar" 
                            role="progressbar" 
                            style={{width: `${uploadProgress}%`}}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                <div className="flex-grow-1 w-100">
                  {editMode ? (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                          type="text"
                          name="displayName"
                          className="form-control"
                          value={formData.displayName}
                          onChange={handleInputChange}
                          required
                          minLength="2"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Sobre</label>
                        <textarea
                          name="about"
                          className="form-control"
                          rows="3"
                          value={formData.about}
                          onChange={handleInputChange}
                          maxLength="500"
                        />
                        <small className="text-muted">{500 - formData.about.length} caracteres restantes</small>
                      </div>
                      <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-primary flex-grow-1">
                          Salvar Alterações
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-outline-secondary"
                          onClick={() => {
                            setEditMode(false);
                            setError('');
                          }}
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <h2 className="mb-1">
                        {userData?.displayName || currentUser.displayName || 'Usuário'}
                      </h2>
                      <p className="text-muted mb-2">
                        <i className="bi bi-envelope me-2"></i>
                        {currentUser.email}
                      </p>
                      {userData?.about && (
                        <div className="mb-3">
                          <h5 className="text-muted">Sobre</h5>
                          <p className="text-break">{userData.about}</p>
                        </div>
                      )}
                      <button 
                        className="btn btn-primary"
                        onClick={() => setEditMode(true)}
                      >
                        <i className="bi bi-pencil me-2"></i>
                        Editar Perfil
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <i className="bi bi-bar-chart me-2"></i>
                    Estatísticas
                  </h5>
                  <hr />
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="p-2">
                        <h3 className="mb-0">0</h3>
                        <small className="text-muted">Posts</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-2">
                        <h3 className="mb-0">0</h3>
                        <small className="text-muted">Cursos</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-2">
                        <h3 className="mb-0">0</h3>
                        <small className="text-muted">Projetos</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <i className="bi bi-gear me-2"></i>
                    Ações
                  </h5>
                  <hr />
                  <div className="d-grid gap-2">
                    <Link 
                      to="/configuracoes" 
                      className="btn btn-outline-secondary text-start"
                    >
                      <i className="bi bi-sliders me-2"></i>
                      Configurações da Conta
                    </Link>
                    <button 
                      className="btn btn-outline-danger text-start"
                      onClick={handleSignOut}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;