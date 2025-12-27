import CardTypePlans from "./card-type-plans";

function CardPlans() {
    return (
        <div id="card-planes">
            <div className="flex items-center justify-center w-full h-12 p-8">
                <h1 className="text-xl font-bold">Planos de Treinamento</h1>
            </div>
            <div className="flex p-5 justify-center gap-6">
        
        <div className="bg-[var(--main-text)] text-[var(--background)] w-56 shadow-xl">
            <h1 className="flex text-2xl font-bold items-center justify-center p-2">
                Básico
            </h1>
            <div id="card-line"></div>
        <div className="bg-[var(--main-text)] p-6 flex flex-col gap-4 text-[var(--background)]">
            <div className="flex gap-2 text-3xl justify-center font-semibold">
                <p className="flex text-[1rem] items-start ">R$</p>
                <p>299</p>
                <p className="flex text-[1rem] items-end"> / mês </p>
            </div>
            <div className="border-b border-[#868585]"></div>
            <p className="text-[0.777rem] text-wrap">Treino e Orientação</p>
        </div>
        </div>

        <div className="bg-[var(--emphasis)] text-[var(--main-text)] w-56 shadow-xl">
            <h1 className="flex text-2xl font-bold items-center justify-center p-2">
                Avançado
            </h1>
            <div id="card-line"></div>
        <div className="bg-[var(--main-text)] p-6 flex flex-col gap-4 text-[var(--background)]">
            <div className="flex gap-2 text-3xl font-semibold justify-center">
                <p className="flex text-[1rem] items-start">R$</p>
                <p>499</p>
                <p className="flex text-[1rem] items-end"> / mês </p>
            </div>
            <div className="border-b border-[#868585]"></div>
            <p className="text-[0.777rem] text-wrap">Treino + Dieta Personalizada</p>
        </div>
        </div>

        <div className="bg-[var(--cards)] text-[var(--main-text)] w-56 shadow-xl">
            <h1 className="flex text-2xl font-bold items-center justify-center p-2">
                Vip
            </h1>
            <div id="card-line"></div>
        <div className="bg-[var(--cards)] p-6 flex flex-col gap-4 text-[var(--main-text)]">
            <div className="flex gap-2 text-3xl font-semibold justify-center">
                <p className="flex text-[1rem] items-start">R$</p>
                <p>699</p>
                <p className="flex text-[1rem] items-end"> / mês </p>
            </div>
            <div className="border-b border-[#868585]"></div>
            <p className="text-[0.777rem] text-wrap">Treino, Dieta + Acompanhamento Semanal</p>
        </div>
        </div>
            </div>
            <div id="card-line"></div>
        </div>
    )
}

export default CardPlans;