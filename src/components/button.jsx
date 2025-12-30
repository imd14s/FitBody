export default function Button() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a 
            href="https://wa.me/5511953482232" 
            target="_blank" 
            className="bg-[var(--cta)] text-[var(--main-text)] px-6 py-3 rounded-full hover:bg-[var(--cta)]/70 transition cursor-pointer flex items-center justify-center gap-2 bg-[var(--cta)] text-[var(--main-text)] font-bold p-3 rounded-full hover:opacity-90 transition-opacity">
                <img className="size-10" src="./assets/telefone.png"/>
            </a>
        </div>
    )
}