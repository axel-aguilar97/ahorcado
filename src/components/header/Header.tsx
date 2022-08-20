const Header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg sticky-top" style={{ backgroundColor: "#121212" }}>
            <div className="container-fluid">
                <h1 className="navbar-brand mb-0">Ahorcado</h1>

                <ul className="cHeaderUserBar">
                    <li>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#elModalInfo"><i className="bi bi-info-circle"></i></button>
                        <div id="elModalInfo" className="modal fade" tabIndex={-1} aria-labelledby="elModalInfoLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content text-bg-dark">
                                    <div className="modal-body">
                                        <p>Info</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#elModelStats"><i className="bi bi-bar-chart"></i></button>
                        <div id="elModelStats" className="modal fade" tabIndex={-1} aria-labelledby="elModelStatsLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content text-bg-dark">
                                    <div className="modal-body">
                                        <p>Stats</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
