import { Section, BackgroundImage, Footer } from '../../styles/LayoutStyle'
import bg from './../../assets/img/bg.jpeg'

export default function Layout({ title, children, showBackground = true }) {
  return (
    <>
      <Section className={`${title}container`}>
        {showBackground && <BackgroundImage className="bg" src={bg} alt="bg" />}
        {children}
      </Section>
      <Footer id="footer">20240816-20240826 / fonts by noonnu / Icons by fontAwesome, icons8 / Designed by yuna</Footer>
    </>
  )
}
