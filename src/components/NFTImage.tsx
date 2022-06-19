import {
	Button,
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
	Portal,
	Spinner,
	Text,
	PopoverBody,
	Center,
	Box,
	useToast,
} from '@chakra-ui/react';
import { IoMdHammer } from 'react-icons/io';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { contract } from './Home';

interface NFTImageProps {
	tokenId: number;
	getCount: () => void;
}
export default function NFTImage({ tokenId, getCount }: NFTImageProps) {
	// pinata cid
	const contentId = import.meta.env.VITE_CONTENT_ID;
	const fileExtension = import.meta.env.VITE_FILE_EXTENSION;
	const metadataURI = `${contentId}/${tokenId}.json`;
	const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.${fileExtension}`;

	const [isMinted, setIsMinted] = useState<boolean>(false);
	const [isProcessing, setIsProcessing] = useState<boolean>(false);
	const [thisURI, setThisURI] = useState<string>('');

	const toast = useToast();

	useEffect(() => {
		getMintedStatus();
	}, [isMinted]);

	const getURI = async () => {
		const uri = await contract.tokenURI(tokenId);
		setThisURI(uri);
	};

	const getMintedStatus = async () => {
		const res = await contract.isContentOwned(metadataURI);
		setIsMinted(res);
	};

	const mintToken = async () => {
		const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
		const addr = accounts[0];

		setIsProcessing(true);

		try {
			await (
				await contract.payToMint(addr, metadataURI, {
					value: ethers.utils.parseEther('0.05'),
				})
			).wait();

			getMintedStatus();

			toast({
				title: '鍛造成功',
				description: '您的NFT已經鍛造成功',
				status: 'success',
				duration: 9000,
				isClosable: true,
			});
		} catch (error: any) {
			toast({
				title: '發生錯誤',
				description: error.message,
				status: 'error',
				duration: 9000,
				isClosable: true,
			});
		} finally {
			setIsProcessing(false);
			getCount();
		}
	};

	return (
		<Box
			_hover={{ transform: 'scale(1.05)', transition: 'all .1s ease-in-out' }}
		>
			<Center
				w={335}
				h={335}
				bgGradient='linear(to-l, #7928CA, #FF0080)'
				rounded='3xl'
			>
				<Center
					w={330}
					h={330}
					backgroundColor='#b6b6b6'
					backgroundImage={
						isMinted ? imageURI : '/images/placeholder.png'
					}
					bgPosition='center'
					bgSize='cover'
					bgRepeat='no-repeat'
					rounded='3xl'
					_hover={{ shadow: 'xl' }}
				>
					{isMinted ? (
						<Popover>
							<PopoverTrigger>
								<Button
									leftIcon={<WarningTwoIcon />}
									colorScheme='blackAlpha'
									onClick={getURI}
								>
									已被收集！顯示URI
								</Button>
							</PopoverTrigger>

							<Portal>
								<PopoverContent>
									<PopoverArrow />
									<PopoverBody>
										<Text>{thisURI}</Text>
									</PopoverBody>
								</PopoverContent>
							</Portal>
						</Popover>
					) : !isProcessing ? (
						<Button
							leftIcon={<IoMdHammer />}
							colorScheme='pink'
							onClick={mintToken}
						>
							鍛造
						</Button>
					) : null}

					{isProcessing && (
						<Center
							w={330}
							h={330}
							backgroundColor='gray.700'
							opacity={0.7}
							rounded='3xl'
						>
							<Spinner thickness='4px' size='xl' emptyColor='gray.200' />
						</Center>
					)}
				</Center>
			</Center>

			<Text textColor='GrayText' userSelect='none' ml={2} mt={1}>
				Rick Astley ID #{tokenId}
			</Text>
		</Box>
	);
}
