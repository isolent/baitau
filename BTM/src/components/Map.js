import './Map.css'
function Map() {
    return (
        <div className="map_page">
            <div className="map_text">
                <h1>ГЕОГРАФИЯ ПРОЕКТОВ</h1>
            </div>
            <div className="image-container">
                <img src="/images/map.png" className="mapimg" alt="Изображение карты" style={{ width: '800px' }} />
            </div>
        </div>
    );
}

export default Map;