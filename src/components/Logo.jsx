/* eslint-disable react/prop-types */
import logo from '../assets/img/kha.jpeg'

export const Logo = ({text}) => {
  return (
    <div className='auth-form-logo-container'>
        <img className='logo' src={logo} alt="KHA" />
        <span>{text}</span>
    </div>
  )
}