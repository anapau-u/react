import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <section className="wrapper">
                <div className="dis">
                    <h1 className="text-4x1 font-bold title">Bienvenido al CRM</h1>
                    <h2 className="Text-lg">Administración de visitas y clientes</h2>
                    <button className="boton1" onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </section>
        </div>
    )
};
export default LoginButton;