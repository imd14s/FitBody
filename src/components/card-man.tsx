
function CardMan() {
    return (
        <div>
            <div className="flex gap-1 column items-end" id="card-man">
                <div id="card-man-text">
                <h1>Tansforme Seu</h1>
                <h1>Corpo em <b className="text-[var(--emphasis)]">90 Dias!</b></h1>
                <div className="text-[var(--secondary-text)] p-2 text-sm">
                    <p>Alcance o shape dos seus sonhos</p>
                    <p>com nossos treinos personalizados</p>
                </div>
                <div>
                    <button className="flex items-center gap-3 bg-[var(--cta)] text-[var(--main-text)] font-bold rounded-full px-4 py-2">
                        <img className="size-4" src="./assets/telefone.png"/>
                        Começar agora
                    </button>
                    <p className="text-[13px] p-2">Garanta sua vaga hoje!</p>
                </div>
            </div>
            <div>
                <img src="./assets/mulher.png"/>
            </div>
            </div>
            <div id="card-line"></div>
        </div>
    )
}

export default CardMan;