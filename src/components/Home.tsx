import { ethers } from 'ethers';
import WalletBalance from './WalletBalance';
import NFTRolls from '../artifacts/contracts/NFTRolls.sol/NFTRolls.json';
import NFTImage from './NFTImage';
import { useEffect, useState } from 'react';
import { Box, Center, Container, Flex, Heading, Stack } from '@chakra-ui/react';

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const contract = new ethers.Contract(
	contractAddress,
	NFTRolls.abi,
	provider.getSigner()
);

export default function Home() {
	const [totalMinted, setTotalMinted] = useState<number>(0);

	useEffect(() => {
		getCount();
	}, []);

	const getCount = async () => {
		const count = parseInt(await contract.count());
		setTotalMinted(count);
	};

	return (
		<Stack minH='100vh' justifyContent='center' gap={10}>
			<Center minH='40vh'>
				<Container>
					<Stack gap={10}>
						<Flex alignItems='end' justifyContent='center' w='100%'>
							<Box overflow='hidden' width={200} height={200}>
								<img src='/assets/images/heading_icon.png' alt='rick-astley' />
							</Box>

							<Heading
								bgGradient='linear(to-l, #7928CA, #FF0080)'
								bgClip='text'
								fontWeight='extrabold'
								userSelect='none'
								size='4xl'
							>
								NFTRolls
							</Heading>
						</Flex>

						<WalletBalance />
					</Stack>
				</Container>
			</Center>

			<Container maxW='100vw' alignItems='center'>
				<Center gap={10} flexWrap='wrap' mb={20}>
					{Array(totalMinted + 1)
						.fill(0)
						.map((_, i) => (
							<NFTImage key={i + 1} tokenId={i + 1} getCount={getCount} />
						))}
				</Center>
			</Container>
		</Stack>
	);
}
