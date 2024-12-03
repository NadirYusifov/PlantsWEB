import MainHeaderComponents from './mainheader'
import Topheader from './topheader'

export default function Header () {
  return (
    <div className=' sticky top-0 z-50'>
        <Topheader/>
        <MainHeaderComponents/>
    </div>
  )
}
