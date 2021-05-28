import React from 'react'

import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles'

interface CategoryProps {
  name: string
  icon: string
}
export interface TransactionCardProps {
  title: string
  amount: string
  category: CategoryProps
  date: string
  type: 'positive' | 'negative'
}
interface Props {
  data: TransactionCardProps
}

export function TransactionCard({ data } : Props) : JSX.Element {
  return <Container>
    <Title>{data.title}</Title>
    <Amount type={data.type}>{data.type === 'negative' && '- '}{data.amount}</Amount>
    <Footer>
      <Category>
        <Icon name={data.category.icon} />
        <CategoryName>{data.category.name}</CategoryName>
      </Category>
      <Date>
        {data.date}
      </Date>
    </Footer>
  </Container>
}