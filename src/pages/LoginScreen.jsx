const Login = () => {
  return (
    <main className="w-100 m-auto vh-100 d-flex align-items-center">
      <form className="w-25 mx-auto">
        <img
          className="mb-4 d-block mx-auto "
          src="/logo.png"
          alt=""
          style={{ width: "10rem" }}
        />

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Correo Electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-info mt-4" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </main>
  );
};

export default Login;
