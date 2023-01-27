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
          <div className='py-4'>
            <h2 className='text-2xl'>About Me</h2>
            <div className='my-4'>
              <h3 className='text-xl'>Who Am I?</h3>
              <p className='text-lg'>Halo, Namaku Akbar Rizky Rabbani, Aku Berasal Dari Kota Pangkalpinang Kep.Bangka Belitung</p>
              <p className='text-lg'>Saya Berprofesi Sebagai Junior Front End Web Developer</p>
            </div>
          </div>
          <div className='py-4'>
            <h3 className='capitalize text-[#5651e5]'>Riwayat Sekolah</h3>
            <div className='grid grid-cols-3 gap-4'>
              {
                tables.map((tables, index) =>
                  <div key={index} className='bg-white rounded-lg shadow-md p-4'>
                    <h4 className='text-lg'>{tables.title}</h4>
                    <p className='text-sm'>{tables.major}</p>
                    <p className='text-sm'>{tables.date}</p>
                  </div>
                )
              }
            </div>
          </div>
          <div className='py-4'>
            <h3 className='capitalize text-[#5651e5]'>Riwayat Organisasi</h3>
            <div className='grid grid-cols-3 gap-4'>
              {
                org.map((org, index) =>
                  <div key={index} className='bg-white rounded-lg shadow-md p-4'>
                    <h4 className='text-lg'>{org.title}</h4>
                    <p className='text-sm'>{org.task}</p>
                    <p className='text-sm'>{org.date}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About  