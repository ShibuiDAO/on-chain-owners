import { gql } from 'graphql-request';

export const NFT_BALANCES = (addr: string, block: number, pagingBy = 999, pagingFrom = 0, pagingTo: number = pagingFrom + pagingBy) => gql`
	{
		erc721Contract(id: "${addr}", block: { number: ${block} }) {
			tokens(first: ${pagingBy}, where: { identifier_gte: ${pagingFrom}, identifier_lt: ${pagingTo}, owner_gt: "" }) {
				owner {
					id
				}
			}
		}
	}
`;
