import React from 'react'

function About() {
  const tables = [
    { 
      title: 'SMK Negeri 2 Pangkalpinang',
      major: 'Teknik Jaringan Dan Komputer',
      date: '2012-2015' 
    },
    { 
      title: 'Telkom University, Bandung',
      major: 'Teknik Komputer',
      date: '2015-2020' 
    },
    { 
      title: 'Universitas Padjajaran, Bandung',
      major: 'Administrasi bisnis',
      date: '2021-Sekarang' 
    },
  ]
  const org = [
    {
      title: 'Software Enginerring Application Research Group Telkom University',
      task: 'Anggota Reserach Group',
      date: '2016-2017'
    },
    {
      title: 'Software Enginerring Application Study Group Telkom University',
      task: 'Anggota Study Group',
      date: '2017-2018'
    },
    {
      title: 'Overclock HMTK Telkom University',
      task: 'Anggota Publikasi Dan Dokumentasi',
      date: '2017-2018'
    },
    {
      title: 'Overhead HMTK Telkom University',
      task: 'Anggota Publikasi Dan Dokumentasi',
      date: '2018-2019'
    },
    {
      title: 'BPM HMTK Telkom University',
      task: 'Ketua Bidang Hubungan Masyarakat',
      date: '2019-2020'
    }
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
          <div className='overflow-x-auto'>
            <table className='border border-hidden table-auto w-full'>
              <thead>
                <tr>
                  <th className='bg-gray-400 text-left'>Nama Sekolah</th>
                  <th className='bg-gray-400 text-left'>Jurusan</th>
                  <th className='bg-gray-400 text-left'>Tahun</th>
                </tr>
              </thead>
              <tbody>
                {
                  tables.map((table, index) =>
                    <tr key={index} className='hover:bg-gray-100'>
                      <td className='text-sm py-4'>{ table.title }</td>
                      <td className='text-sm'>{ table.major }</td>
                      <td className='text-sm'>{ table.date }</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
          <h3 className='py-4 capitalize text-[#5651e5]'>Riwayat Organisasi</h3>
          <div className='overflow-x-auto'>
          <table className='border border-hidden table-auto w-full'>
              <thead>
                <tr>
                  <th className='bg-gray-400 text-left'>Nama Organisasi</th>
                  <th className='bg-gray-400 text-left'>Posisi</th>
                  <th className='bg-gray-400 text-left'>Tahun</th>
                </tr>
              </thead>
              <tbody>
                {
                  org.map((org, index) =>
                    <tr key={index} className='hover:bg-gray-100'>
                      <td className='text-sm py-4'>{ org.title }</td>
                      <td className='text-sm'>{ org.task }</td>
                      <td className='text-sm'>{ org.date }</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About  