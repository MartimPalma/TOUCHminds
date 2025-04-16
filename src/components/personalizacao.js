import React, { useCallback, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "../imgs/logositeazul.png";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const PersonalizationPopup = ({
  nome,
  setNome,
  selectedAvatar,
  setSelectedAvatar,
  avatarOptions,
  userId,
  loading,
  setLoading,
  setError
}) => {
  const { updateUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNomeChange = useCallback((e) => {
    setNome(e.target.value);
  }, [setNome]);

  const handlePersonalizationSave = useCallback(async () => {
    
    if (!nome || !selectedAvatar) {
      if (typeof setError === "function") {
        setError("Por favor, preencha todos os campos.");
      }
      if (typeof setLoading === 'function') {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);

      const updatedUserData = {
        nome: nome,
        avatar: selectedAvatar,
        uid: userId
      };

      updateUserData(updatedUserData);
      navigate("/homepage");
    } catch (error) {
      if (typeof setError === "function") {
        setError(error.message || "Erro ao salvar personalização.");
      }
      setLoading(false);
    }
  }, [nome, selectedAvatar, userId, updateUserData, navigate, setError, setLoading]);

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    >
      <div
        className="bg-white p-4 rounded-4 shadow"
        style={{ maxWidth: "650px", width: "90%" }}
      >
        <h2 className="text-center mb-4 font-poppins" style={{ color: "#69a6a4" }}>
          Personaliza o teu{" "}
          <span>
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </span>
        </h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="platformName" className="form-label">
              Nome na Plataforma
            </label>
            <input
              id="platformName"
              type="text"
              className="form-control popup-input"
              placeholder="Nome que queres ser tratado na Plataforma"
              value={nome}
              onChange={handleNomeChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="d-block mb-2">Escolhe o teu Avatar</label>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {avatarOptions.map((avatar) => (
                <img
                  key={avatar.id}
                  src={avatar.src}
                  alt={`Avatar ${avatar.id}`}
                  onClick={() => setSelectedAvatar(avatar.id)}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    border:
                      selectedAvatar === avatar.id
                        ? "3px solid #99CBC8"
                        : "2px solid transparent",
                    transition: "all 0.2s ease-in-out",
                  }}
                  role="button"
                  aria-label={`Avatar ${avatar.id}`}
                />
              ))}
            </div>

            <div className="text-center mt-3">
              <img
                src={avatarOptions.find((a) => a.id === selectedAvatar)?.src}
                alt="Selected Avatar"
                style={{ width: "80px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>

        <div className="text-end mt-4">
          <button
            className="popup-btn"
            onClick={handlePersonalizationSave}
            disabled={loading}
          >
            {loading ? "A processar..." : "Começar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationPopup;
