const data = {
    "namaDepan": "Sintya",
    "namaBelakang": "Marisca",
    "saldoRp": "12000",
    "saldoDiamond": "300",
    "terakhirDipelajari": [
        {
            "icon": "fisika",
            "nama": "Fisika",
            "bab": 1,
        },
        {
            "icon": "matematika",
            "nama": "Matematika",
            "bab": 3,
        },
        {
            "icon": "biologi",
            "nama": "Biologi",
            "bab": 2,
        },
    ],
    "paketSaya": [
        {
            "icon": "people",
            "nama": "Paket Patungan",
            "status": "Aktif",
            "aktifHingga": "24 Nov 2020",
            "hargaRp": 250000
        },
        {
            "icon": "default-1",
            "nama": "Langganan Materi Matematika",
            "status": "Aktif",
            "aktifHingga": "24 Nov 2020",
            "hargaRp": 150000
        },
        {
            "icon": "default-2",
            "nama": "Langganan Materi Matematika",
            "status": "Nonaktif",
            "aktifHingga": "Sudah habis",
            "hargaRp": 550000
        },
    ]
}

const Sidebar = () => {
    return(
        <div className='px-3'>
            <div className="w-100 text-center">
                <img className='rounded-circle' alt="" src={require('../assets/profile.jpg').default}/>
                <h6>{data["namaDepan"]} {data["namaBelakang"]}</h6>
                <h6>
                    <span className='text-info me-3'><img className='icon-mini mb-1' alt="" src={require('../assets/icons/wallet.png').default}/> {data["saldoRp"]}</span>
                    <span className='text-warning'><img className='icon-mini mb-1' alt="" src={require('../assets/icons/diamond.png').default}/> {data["saldoDiamond"]}</span>
                </h6>
            </div>
            <div className='bg-white rounded-3 shadow-sm p-2 pb-1 d-flex'>
                <div className="flex-fill section-title">Premium</div>
                <small>Sampai 24 Nov 2020</small>
            </div>
            <div className='d-flex mt-4'>
                <div className="flex-fill section-title mb-3">Terakhir Dipelajari</div>
                <small className="">Lihat semua →</small>
            </div>
            {data["terakhirDipelajari"].map((item, key) => (
                <div className='d-flex mb-2' key={key}>
                    <img className="icon-pelajaran me-2" alt="" src={require('../assets/icons/pelajaran/'+item["icon"]+'.png').default}/>
                    {/* <div className="h1">{item["icon"]}</div> */}
                    <div className="flex-fill section-title">{item["nama"]} - Bab {item["bab"]}</div>
                </div>
            ))}
            <div className='d-flex mt-4'>
                <div className="flex-fill section-title mb-3">Paket Saya</div>
                <small className="">Lihat semua →</small>
            </div>
            {data["paketSaya"].map((item, key) => (
                <div className='d-flex mb-2' key={key}>
                    <img className="icon-pelajaran me-2" alt="" src={require('../assets/icons/paket/'+item["icon"]+'.png').default}/>
                    <div className='flex-grow-1 d-flex flex-column'>
                        <div className="d-flex flex-row">
                            <span className='flex-fill section-title'>{item["nama"]}</span>
                            <div>
                                <div className={`badge bg-success rounded-pill px-3 mx-2 ${item["status"]==="Nonaktif" && "d-none"}`}>{item["status"]}</div>
                            </div>
                        </div>
                        <div className='d-flex flex-row text-secondary'>
                            <small className='flex-fill'>Aktif hingga<br/>{item["aktifHingga"]}</small>
                            <small className='flex-fill'>Harga<br/>{item["hargaRp"]}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;