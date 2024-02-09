import logo from '../../images/logo_barragem.png'
import { Button, Nav, InputSpace, ImageLogo } from './NavbarStyled'

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <input type="text" placeholder='Pesquise por uma barragem' />
          <i className="bi bi-search"></i>
        </InputSpace>
        {/* <ImageLogo src={logo} alt="Logo barragem"></ImageLogo> */}
        <Button>Entrar</Button>
      </Nav>
    </>
  )
}