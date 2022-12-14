import { Box, Title } from '@mantine/core';

interface TowerType {
	towerName: string;
	discs: number[];
}

const colors = [
	'#c92a2a',
	'#862e9c',
	'#1864ab',
	'#2b8a3e',
	'#d9480f',
	'#5f3dc4',
	'#a61e4d',
	'#0b7285',
	'#483C32',
	'#003153'
];

export const Tower = ({ towerName, discs }: TowerType) => {
	return (
		<Box
			sx={{
				height: '100%',
				position: 'relative'
			}}
		>
			<Box
				sx={{
					width: '100%',
					position: 'absolute',
					bottom: '70px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				{discs.map((disc) => {
					return (
						<Box
							sx={{
								background: `${colors[disc - 1]}`,
								height: `${40 - discs.length}px`,
								textAlign: 'center',
								width: `${50 + 20 * disc}px`,
								margin: '5px 0',
								borderRadius: '25px',
								color: 'white',
								fontWeight: 'bolder',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
							key={`disc ${towerName} ${disc}`}
						>
							{disc}
						</Box>
					);
				})}
			</Box>

			<Box
				sx={{
					background: 'Black',
					height: '50px',
					color: 'white',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					width: '100%',
					bottom: '0'
				}}
			>
				<Title order={3}>Tower {towerName}</Title>
			</Box>
		</Box>
	);
};
