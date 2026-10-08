import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 100 },  // Naik cepat ke 100 pengguna dalam 10 detik
    { duration: '30s', target: 1500 }, // Naik ke 1500 pengguna dalam 30 detik
    { duration: '1m', target: 1500 },  // Menahan serangan konstan 1500 pengguna selama 1 menit
    { duration: '10s', target: 0 },    // Meredakan trafik kembali ke 0
  ],
};

export default function () {
  // Ganti dengan endpoint API website yang ingin dituju
  const url = 'http://nama-endpoint.domain'; 
  
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'K6-DDoS-Simulation-Test',
  };

  http.get(url, { headers: headers });
  
  // Sleep singkat untuk menyimulasikan jeda antar request (misal 0.1 detik)
  // Jika ingin serangan lebih brutal tanpa henti, hapus baris sleep di bawah ini
  sleep(0.1); 
}
