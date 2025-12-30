
function CardMan() {
    return (
        <div>
            <div className="flex flex-col items-center gap-1 md:flex-row" id="card-man">
                <div id="card-man-text">
                    <h1>Tansforme Seu</h1>
                    <h1>Corpo em <b className="text-[var(--emphasis)]">90 Dias!</b></h1>
                    <div className="text-[var(--secondary-text)] p-2 text-sm">
                        <p>Alcance o shape dos seus sonhos</p>
                        <p>com nossos treinos personalizados</p>
                    </div>
                    <div>
                        <a href="https://wa.me/5511953482232" target="_blank" className="cursor-pointer flex items-center justify-center gap-2 bg-[var(--cta)] text-[var(--main-text)] font-bold p-3 rounded-full hover:opacity-90 transition-opacity">
                            <img className="size-4" src="./assets/telefone.png" />
                            Começar agora
                        </a>
                        <p className="text-[13px] p-2">Garanta sua vaga hoje!</p>
                    </div>
                </div>
                <div >
                    <img src="./assets/mulher.png" />
                </div>
            </div>
            <div id="card-line"></div>
        </div >
    )
}

export default CardMan;