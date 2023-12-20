import './styles.css';

export default function SearchBar() {

    return (
        <form>
            <input type="text" placeholder="Digite sua senha" />
            <button type="submit">Buscar</button>
        </form>
    );
}