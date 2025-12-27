function Header() {
    return (
        <header>
            <div className="flex p-2 pl-4 pr-4 justify-between items-center">
                <h1 className="flex">
                <p id="Fit">FIT</p><p id="Body">BODY</p>
            </h1>
            <div>
                <nav>
                    <ul className="flex gap-6">
                        <li>Sobre</li>
                        <li>Programas</li>
                        <li>Depoimentos</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
            </div>
            <div id="header-line"></div>
        </header>
    );
}

export default Header;