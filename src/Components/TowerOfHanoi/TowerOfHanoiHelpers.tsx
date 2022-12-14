export interface towerMove {
	currentTower: number;
	from: number;
	to: number;
}

export const simulateTowerOfHanoiHelper = (numberOfDiscs: number) => {
	let moves = [] as towerMove[];
	const simulate = (disks: number, from: number, to: number, aux: number) => {
		if (disks === 1) {
			moves.push({ currentTower: disks, from: from, to: to });
			return;
		}
		simulate(disks - 1, from, aux, to);
		moves.push({ currentTower: disks, from: from, to: to });
		simulate(disks - 1, aux, to, from);
	};
	simulate(numberOfDiscs, 1, 3, 2);
	return moves;
};
