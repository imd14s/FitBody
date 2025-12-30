
function CardIcons() {
    return (
        <div>
            <div className="gap-2 md:flex" id="card-icons">
                <div>
                    <img src="./assets/treino.png"/>
                    <p>Treinos Personalizados</p>
                </div>
                <div className="border-x-1" id="space"></div>
                <div >
                    <img src="./assets/nutri.png"/>
                    <p>Nutrição Balanceada</p>
                </div>
                <div className="border-x-1" id="space"></div>
                <div>
                    <img src="./assets/acompanhamento.png"/>
                    <p>Acompanhamento Completo</p>
                </div>
            </div>
        </div>
    )
}

export default CardIcons;