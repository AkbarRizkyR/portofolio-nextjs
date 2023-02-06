import React from 'react'
import { TypeAnimation } from 'react-type-animation'

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
    <div className='flex flex-col items-center justify-center w-full bg-gray-200'>
      <div className='p-6 md:p-16 mx-auto'>
        <div className='max-w-1240px m-auto px-2 py-4 w-full'>
          <h2 className='text-2xl text-gray-800 font-bold'>About Me</h2>
          <div className='my-10'>
            <h3 className='text-xl font-medium text-gray-700'>
              <TypeAnimation
                sequence={["Siapa Aku?", 3000, "Who Am I?"]}
                wrapper="span"
                cursor={true}
                repeat={1}
              />
            </h3>
            <p className='text-lg text-gray-600'>
              Halo, Namaku Akbar Rizky Rabbani, Aku Berasal Dari Kota Pangkalpinang Kep.Bangka Belitung. Saya Berprofesi Sebagai Junior Front End Web Developer.
            </p>
          </div>
          <h3 className='capitalize text-indigo-500 font-medium'>Riwayat Sekolah</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
            {
              tables.map((tables, index) =>
                <div key={index} className='bg-white rounded-lg shadow-md p-4'>
                  <h4 className='text-lg font-medium text-gray-800'>{tables.title}</h4>
                  <p className='text-sm text-gray-600'>{tables.major}</p>
                  <p className='text-sm text-gray-600'>{tables.date}</p>
                </div>
              )
            }
          </div>

          <h3 className='capitalize text-indigo-500 font-medium mt-10'>Riwayat Organisasi</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
            {
              org.map((org, index) =>
                <div key={index} className='bg-white rounded-lg shadow-md p-4 max-w-full'>
                  <h4 className='text-lg font-medium text-gray-800'>{org.title}</h4>
                  <p className='text-sm text-gray-600'>{org.task}</p>
                  <p className='text-sm text-gray-600'>{org.date}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About  