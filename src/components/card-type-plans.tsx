type CardTypePlansProps = {
    text: string; 
    value: string; 
    description: string; 
    type: string; 
    text_color: string;
    background_card: string;
    text_color_card: string
};

function CardTypePlans(
    { 
        text, 
        value, 
        description, 
        type, 
        text_color, 
        background_card, 
        text_color_card 
    }: CardTypePlansProps) 
    {
    return (
        <div className={`bg-[var(--${type})] text-[var(--${text_color})] w-56 shadow-xl`}>
            <h1 className="flex text-2xl font-bold items-center justify-center">
                {text}
            </h1>
            <div id="card-line"></div>
        <div className={`bg-[var(--${background_card})] p-6 flex flex-col gap-4 text-[var(--${text_color_card})]`}>
            <div className="flex gap-2 text-3xl font-semibold">
                <p className="flex text-[1rem] items-start">R$</p>
                <p>{value}</p>
                <p className="flex text-[1rem] items-end"> / mês </p>
            </div>
            <div className="border-b border-[#868585]"></div>
            <p className="text-[0.777rem] text-wrap">{description}</p>
        </div>
        </div>
    )
}

export default CardTypePlans;