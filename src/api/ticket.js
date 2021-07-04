import { transRange, transHouseType } from './data.js'

export function getTicketSummary (ticket) {
  const budget = []
  budget.push(transRange(ticket.housePurchaseBudgetMin, ticket.housePurchaseBudgetMax, '万'))
  budget.push(transHouseType(ticket.intentionHouseType))
  budget.push(transRange(ticket.purchaseAreaMin, ticket.purchaseAreaMax, 'm²'))
  budget.push(transRange(ticket.region, ticket.plate))
  return budget
    .filter(e => {
      return e
    })
    .join(',')
}
