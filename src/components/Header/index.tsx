import { Brand, Container, BackButton, BackIcon } from './styles'
import logo from '@assets/logo.png'

type HeaderProps = {
  showBackButton?: boolean
}

const Header = ({ showBackButton = false }: HeaderProps) => {
  return (
    <Container style={{ marginTop: 30 }}>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Brand source={logo} />
    </Container>
  )
}

export { Header }
