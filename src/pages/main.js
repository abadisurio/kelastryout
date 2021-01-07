
import { Bar, Line, defaults } from 'react-chartjs-2';

defaults.global.defaultFontSize = 8;
// defaults.global.

const data = {
    "namaDepan": "Sintya",
    "greetings": "Pagi",
    "materi": [
        {
            "namaMateri": "Medan Magnet",
            "type": "Video",
            "lastAccessed": "13 jam lalu",
            "icon": "medan-magnet.png",
            "color": "bg-info"
        },{
            "namaMateri": "Listrik Statis",
            "type": "Video",
            "lastAccessed": "13 jam lalu",
            "icon": "listrik-statis.png",
            "color": "bg-secondary"
        },{
            "namaMateri": "Turunan",
            "type": "Video",
            "lastAccessed": "13 jam lalu",
            "icon": "turunan.png",
            "color": "bg-warning"
        },{
            "namaMateri": "Aljabar",
            "type": "Video",
            "lastAccessed": "13 jam lalu",
            "icon": "aljabar.png",
            "color": "bg-danger"
        },{
            "namaMateri": "Present Continous",
            "type": "Video",
            "lastAccessed": "13 jam lalu",
            "icon": "present-continous.png",
            "color": "bg-primary"
        },{
            "namaMateri": "Simple Past Tense",
            "type": "Video",
            "lastAccessed": "13 jam lalu",
            "icon": "simple-past-tense.png",
            "color": "bg-success"
        },
    ],
    "tryout": [
        {
            "namaTryout": "Tryout UTBK 2021 #1",
            "date": "25 - 26 Agustus 2020",
            "status": "unlocked"
        },{
            "namaTryout": "Tryout UTBK 2021 #1",
            "date": "25 - 26 Agustus 2020",
            "status": "locked",
            "priceRp": 10000,
            "priceDiamond": 10
        },{
            "namaTryout": "Tryout UTBK 2021 #1",
            "date": "25 - 26 Agustus 2020",
            "status": "locked",
            "priceRp": 10000,
            "priceDiamond": 10
        },{
            "namaTryout": "Tryout UTBK 2021 #1",
            "date": "25 - 26 Agustus 2020",
            "status": "locked",
            "priceRp": 10000,
            "priceDiamond": 10
        },{
            "namaTryout": "Tryout UTBK 2021 #1",
            "date": "25 - 26 Agustus 2020",
            "status": "locked",
            "priceRp": 10000,
            "priceDiamond": 10
        }
    ]
}
const dataLineChart = {
    labels: ['TO UTBK #01', 'TO UTBK #2', 'TO SBMPTN',
           'TO UTBK #03', 'TO UTBK #04'],
    datasets: [
        {
            label: 'Nilai rata-rata tryout',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#BB83F6',
            borderWidth: 2,
            data: [100, 185, 30, 10, 30]
        }
    ],
}

const dataBarChart = {
    labels: ['Aljabar', 'Medan magnet', 'Reproduksi',
           'Luas lautan', 'Turunan'],
    datasets: [
        {
            label: 'Nilai',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 2,
            data: [120, 185, 120, 165, 101]
        },
    ]
}

const Main = () => (
    <main>
        <div className="banner mb-4">
            <div className='d-flex'>
                <div className='flex-fill  p-4'>
                    <h2 className="text-white">Selamat {data["greetings"]}, {data["namaDepan"]}!</h2>
                    <small>Nikmati pengalaman belajar online paling lengkap dan mudah dimengerti.</small>
                </div>
                <img className='img-contain' alt="" src={require('../assets/banner.png').default}/>
            </div>
        </div>
        <div className='row mb-4'>
            <div className='col-6'>
                <div className='rounded-3 shadow p-3'>
                    <h6 className='section-title'>Tryout</h6>
                    <div>
                        <Line data={dataLineChart}/>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='rounded-3 shadow p-3'>
                    <h6 className='section-title'>Kuis</h6>
                    <div>
                        <Bar
                            options={{
                                scales:{
                                    yAxes: [{
                                        ticks:{
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                            data={dataBarChart}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-0 mb-4'>
            <h6 className='section-title'>Materi Saya</h6>
            <div className='row'>
                {data["materi"].map((item, key) => (
                    <div className='col-4 mb-3 ' key={key}>
                        <div className={`rounded-3 shadow text-white p-3 d-flex h-100 ${item["color"]}`}>
                            <div className='flex-grow-1'>
                                <h6>{item["namaMateri"]}</h6>
                                <small>{item["type"]} • {item["lastAccessed"]}</small>
                            </div>
                            <img className="icon-materi" alt="" src={require('../assets/icons/materi/'+item["icon"]).default}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='m-0 mb-4'>
            <div className="d-flex flex-row">
                <span className='flex-fill section-title'>Tryout Hari Ini</span>
                <div>
                    <div className='text-success'>Lihat semua</div>
                </div>
            </div>
            <div className='w-100 overflow-auto py-3'>
                <div className='container-fluid'>
                    <div className='row align-content-stretch flex-nowrap'>
                        {data["tryout"].map((item, key) => (
                            <div className='col-5 flex-grow-1 ' key={key}>
                                <div className={`d-flex  rounded-3 shadow p-2 h-100`}>
                                {item["status"]!=="locked" && (<img className="icon-materi" alt="" src={require('../assets/icons/assignment.png').default}/>)}
                                    <div className='flex-grow-1'>
                                        <h6 className="fw-bold mb-0">{item["namaTryout"]}</h6>
                                        <small>{item["date"]}</small><br/>
                                        {item["status"]==="locked" && (<small>Rp{item["priceRp"]} • {<img className="icon-mini mb-1 " alt="" src={require('../assets/icons/diamond.png').default}/>} {item["priceDiamond"]}</small>)}                                        
                                    </div>
                                    {item["status"]==="locked" && (<img className="icon-materi" alt="" src={require('../assets/icons/lock.png').default}/>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </main>
)

export default Main;