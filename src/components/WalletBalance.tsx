import { useState } from 'react';
import { ethers } from 'ethers';
import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react';
import { UpDownIcon, MinusIcon } from '@chakra-ui/icons';
import { provider } from './Home';

export default function WalletBalance() {
	const [balance, setBalance] = useState<string>('');

	const getBalance = async () => {
		const [account] = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});

		const balance = ethers.utils.formatEther(
			await provider.getBalance(account)
		);
		setBalance(balance);
	};

	const handleButtonOnClick = () =>
		!balance.length ? getBalance() : setBalance('');

	return (
		<Box>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children='$'
					color='gray.300'
				></InputLeftElement>

				<Input
					pointerEvents='none'
					placeholder='您的錢包餘額'
					value={balance}
				></Input>

				<InputRightElement w='max-content'>
					{!balance.length ? (
						<Button
							leftIcon={<UpDownIcon />}
							colorScheme='pink'
							roundedLeft='none'
							onClick={handleButtonOnClick}
						>
							顯示餘額
						</Button>
					) : (
						<Button
							leftIcon={<MinusIcon />}
							colorScheme='blackAlpha'
							roundedLeft='none'
							onClick={handleButtonOnClick}
						>
							隱藏
						</Button>
					)}
				</InputRightElement>
			</InputGroup>
		</Box>
	);
}
