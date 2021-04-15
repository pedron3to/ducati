import styled from '@emotion/styled';

const Background = styled.div`
  height: 100vh;
  background: repeating-linear-gradient(
  -45deg,
  #212529,
  #212529 2.5px,
  #0B0B09 3px,
  #0B0B09 14px
);

`

export default function Layout({ children }: any) {
  return (
    <Background>
      {children}
    </Background>
  )

}
