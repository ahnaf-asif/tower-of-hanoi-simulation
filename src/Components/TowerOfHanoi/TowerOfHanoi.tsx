import { useEffect, useState } from 'react';
import { AppShell, Box, Button, Center, Header, Navbar, Title, Grid, Text } from '@mantine/core';
import { StyledNumberInput } from './TowerOfHanoi.styles';
import { simulateTowerOfHanoiHelper, towerMove } from './TowerOfHanoiHelpers';

import { Tower } from './Tower/Tower';

const TowerOfHanoi = () => {
	const [numberOfDisks, setNumberOfDisks] = useState<number | undefined>(3);
	const [discs, handleDiscs] = useState<any[][]>([[1, 2, 3], [], []]);
	const [discMove, handleDiscMove] = useState<towerMove>({ currentTower: -1, from: -1, to: -1 });
	const [canSimulate, handleCanSimulate] = useState<boolean>(true);

	const startSimulation = async () => {
		handleCanSimulate(false);

		const moves = simulateTowerOfHanoiHelper(numberOfDisks as number);

		for (let i = 0; i < moves.length; i++) {
			const currentMove = moves[i];
			await new Promise((resolve) => setTimeout(resolve, 500));
			handleDiscMove(currentMove);
		}

		await new Promise((resolve) => setTimeout(resolve, 500));
		handleDiscMove(discMove);
	};

	const resetEverything = () => {
		handleCanSimulate(true);
		setNumberOfDisks(3);
		handleDiscs([[1, 2, 3], [], []]);
		handleDiscMove({ currentTower: -1, from: -1, to: -1 });
	};

	const updateDiscsArray = async () => {
		const { from, to } = discMove;

		if (from == -1 || to == -1) return;

		const toAra = [discs[from - 1][0], ...discs[to - 1]];
		const fromAra = discs[from - 1].slice(1, discs[from - 1].length);

		const newDiscs = discs;
		newDiscs[from - 1] = fromAra;
		newDiscs[to - 1] = toAra;

		await new Promise((resolve) => setTimeout(resolve, 500));
		handleDiscs(newDiscs);
	};

	useEffect(() => {
		updateDiscsArray();
	}, [discMove]);

	useEffect(() => {
		const newAra = [];
		const len = numberOfDisks as number;
		for (let i = 0; i < len; i++) {
			newAra.push(i + 1);
		}
		handleDiscs([newAra, [], []]);
	}, [numberOfDisks]);

	return (
		<AppShell
			padding="md"
			navbar={
				<Navbar width={{ base: 300, position: 'relative' }} p="xs">
					<Box
						sx={{
							paddingBottom: 10,
							borderBottom: `1px solid lightgray`,
							marginBottom: 30
						}}
					>
						<Title order={3}>
							<Center>Settings</Center>
						</Title>
					</Box>
					<Center>
						<Text weight="bolder" color="red.9" py={10}>
							Please hit reset once before starting a new simulation
						</Text>
					</Center>
					<Button my={20} color="dark" onClick={resetEverything}>
						Reset Everything
					</Button>
					<StyledNumberInput
						min={2}
						max={10}
						value={numberOfDisks}
						onChange={(val) => setNumberOfDisks(val)}
						label="Number of discs"
						description="Please enter a number between 2 and 10 (the browser may crash if you enter a number greater than 10)"
					/>

					<Button
						disabled={!canSimulate}
						onClick={startSimulation}
						size="lg"
						mt={40}
						color="indigo"
					>
						Start the simulation!
					</Button>
					<Box
						sx={{
							position: 'absolute',
							bottom: 10
						}}
					>
						<Center mt={50}>
							Created By &nbsp;
							<a
								target="_blank"
								href="https://github.com/ahnaf-asif"
								style={{
									color: 'blue',
									textDecoration: 'none'
								}}
							>
								Ahnaf Shahriar Asif
							</a>
						</Center>
					</Box>
				</Navbar>
			}
			header={
				<Header height={60} p="xs">
					<Center>
						<Title order={2}>Tower Of Hanoi Simulation</Title>
					</Center>
				</Header>
			}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}
			})}
		>
			<Box
				sx={{
					width: '850px',
					height: '500px'
				}}
			>
				<Grid sx={{ height: '100%' }}>
					<Grid.Col span={4}>
						<Tower towerName="A" discs={discs[0]} />
					</Grid.Col>
					<Grid.Col span={4}>
						<Tower towerName="B" discs={discs[1]} />
					</Grid.Col>
					<Grid.Col span={4}>
						<Tower towerName="C" discs={discs[2]} />
					</Grid.Col>
				</Grid>
			</Box>
		</AppShell>
	);
};

export default TowerOfHanoi;
