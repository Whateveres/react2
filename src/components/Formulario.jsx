import { useState } from 'react';

const Formulario = ({ setAlert }) => {

    //Estados del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    //Función para dar formato a email
    const validarEmail = (email) => {
        return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    };

    //Función para validar los datos antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();

        //Si condición Email no es válida:
        if (!validarEmail(email)) {
            setAlert({ message: 'El email no es válido', type: 'danger' });
            return;
        }

        //Si condición Contraseña no es válida:
        if (password !== confirmation) {
            setAlert({ message: 'Las contraseñas no coinciden', type: 'danger' });
            return;
        }

        //Si todo es válido:
        setAlert({ message: 'Registro exitoso', type: 'success' });

        //Si el formulario se envía correctamente, se resetean todos los estados y el formulario
        setName('');
        setEmail('');
        setPassword('');
        setConfirmation('');
    };

    return (
        <form className="Formulario" onSubmit={validarDatos}>

            <div className="form-items">
                <input className="item"
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-items">
                <input className="item"
                    type="email"
                    placeholder="tuemail@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-items">
                <input className="item"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="form-items">
                <input className="item"
                    type="password"
                    placeholder="Confirma tu contraseña"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-dark btn-block">Regístrate </button>

        </form>
    );
}

export default Formulario;