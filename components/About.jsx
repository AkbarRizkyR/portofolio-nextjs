import React from 'react'

function About() {
  const tables = [
    { 
      title: 'SD Negeri 3 Pangkalpinang',
      major: '-',
      date: '2003-2009' 
    },
    { 
      title: 'SMP Negeri Muhammadiyah 1',
      major: '-',
      date: '2009-2010' 
    },
    { 
      title: 'MTS Negeri Pangkalpinang',
      major: '-',
      date: '2010-2012' 
    },
    { 
      title: 'SMK Negeri 2 Pangkalpinang',
      major: 'Teknik Jaringan Dan Komputer',
      date: '2012-2015' 
    },
    { 
      title: 'Telkom University',
      major: 'Teknik Komputer',
      date: '2015-2020' 
    },
    { 
      title: 'Universitas Padjajaran',
      major: 'Administrasi bisnis',
      date: '2021-Sekarang' 
    },
  ]

  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p>About Me</p>
          <h2> Who Am I?</h2>
          <p>Halo, Namaku Akbar Rizky Rabbani, Aku Berasal Dari Kota Pangkalpinang Kep.Bangka Belitung</p>
          <p>Saya Berprofesi Sebagai Junior Front End Web Developer</p>
          <h3 className='py-4 capitalize text-[#5651e5]'>Riwayat Sekolah</h3>
          <div class="overflow-x-auto">
            <table class="border border-hidden table-auto w-full">
              <thead>
                <tr>
                  <th class="bg-gray-400 text-left">Nama Sekolah</th>
                  <th class="bg-gray-400 text-left">Jurusan</th>
                  <th class="bg-gray-400 text-left">Tahun</th>
                </tr>
              </thead>
              <tbody>
                {
                  tables.map((table, index) =>
                    <tr key={index} class="hover:bg-gray-100">
                      <td class="text-sm py-4">{ table.title }</td>
                      <td class="text-sm">{ table.major }</td>
                      <td class="text-sm">{ table.date }</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
          <h3 className='py-4 capitalize text-[#5651e5]'>Riwayat Organisasi</h3>
          <div>

          </div>
          </div>
      </div>
    </div>
  )
}

export default About  