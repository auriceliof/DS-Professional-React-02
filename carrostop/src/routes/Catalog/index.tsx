import './Styles.css';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

export default function Catalog() {

    return (
        <>
            <Header />
            <main className="ct-catalog-main">
                <section id="ct-catalog-section">

                    <div className="ct-search-bar-container">
                        <SearchBar />
                    </div>

                </section>
            </main>
        </>
    );
}