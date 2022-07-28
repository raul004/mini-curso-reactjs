import * as S from './style'

export const ItemCard = ({title, descricao, imagem, alternativo}) => {
    return (
      <S.Container>
        <S.DivTitle>
          <S.Title>{title}</S.Title>
          <S.Description>{descricao}</S.Description>
        </S.DivTitle>
        <S.DivImg>
          <S.Image src={imagem} alt={alternativo} id="img"/>
        </S.DivImg>
      </S.Container>
    )
  }