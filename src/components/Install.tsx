import { Flex, Heading, Button } from '@chakra-ui/react';

export default function Install() {
	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			justifyContent='center'
			direction='column'
			gap={10}
		>
			<Heading fontSize='3xl'>沒有偵測到錢包！點擊按鈕安裝</Heading>
			<a href='https://metamask.io/download.html'>
				<Button colorScheme='pink'>Meta Mask</Button>
			</a>
		</Flex>
	);
}
