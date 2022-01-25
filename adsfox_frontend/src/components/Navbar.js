const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid ">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a
                className="nav-link active"
                style={{ color: "#FA8072" }}
                aria-current="page"
                href="/"
              >
                Kanały
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "#FA8072" }} href="/addCanal">
                Dodaj Kanał
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
