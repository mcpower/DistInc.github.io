// Default Values

const DEFAULT_START = {
	tab: "main",
	achievements: [],
	distance: new ExpantaNum(0),
	velocity: new ExpantaNum(0),
	rank: new ExpantaNum(1),
	tier: new ExpantaNum(0),
	rockets: new ExpantaNum(0),
	rf: new ExpantaNum(0),
}

// Temp Data

const TMP_DATA = {
	ELS: ["distance", "velocity", "maxVel", "acceleration", "rank", "rankUp", "rankDesc", "rankReq", "tier", "tierUp", "tierDesc", "tierReq", "rocketReset", "rocketGain", "rocketsAmt", "rocketsEff", "nextFeature", "achDesc", "rf", "rfReset", "rfReq", "rfEff"],
}

// Formatting Data

const DISTANCES = {
	cm: 1/100,
	m: 1,
	km: 1e3,
	Mm: 1e6,
	Gm: 1e9,
	Tm: 1e12, 
	Pm: 1e15,
	ly: 9.461e15,
	ps: 3.086e16,
	kps: 3.086e19,
	Mps: 3.086e22,
	Gps: 3.086e25,
	uni: 4.4e26,
	"K uni": 4.4e29,
	"M uni": 4.4e32,
	"B uni": 4.4e35,
	"T uni": 4.4e38,
	"Qa uni": 4.4e41,
	"Qi uni": 4.4e44,
	"Sx uni": 4.4e47,
	"Sp uni": 4.4e50,
	"Oc uni": 4.4e53,
	"No uni": 4.4e56,
	"Dc uni": 4.4e59,
}

// Ranks

const RANK_DESCS = {
	1: "increase the maximum velocity by 1m/s.",
	2: "increase the acceleration and maximum velocity by 10% for each rank up.",
	3: "double your acceleration.",
	4: "triple your acceleration & maximum velocity for each tier up.",
	5: "increase the acceleration and maximum velocity by 97.5% for each rank up.",
	8: "increase your maximum velocity by 10% for each rank up.",
	10: "double your acceleration.",
	15: "quadruple your acceleration.",
	25: "multiply your acceleration by 10.",
	50: "multiply your acceleration by 15.",
}

const DEFAULT_RANK_DESC = "rank up."

// Tiers

const TIER_DESCS = {
	0: "make the rank requirement formula 25% slower.",
	1: "double your acceleration and quintuple your maximum velocity if you are at least Rank 3.",
	2: "make the rank requirement formula 10% slower for each tier up.",
	4: "triple your acceleration.",
	5: "quintuple your acceleration.",
	8: "multiply your acceleration by 10.",
	10: "multiply your acceleration by 15.",
}

const DEFAULT_TIER_DESC = "tier up."

// Layers

const LAYER_RESETS = {
	rank: ["distance", "velocity"],
	tier: ["distance", "velocity", "rank"],
	rockets: ["distance", "velocity", "rank", "tier"],
	rf: ["rockets"],
}

const LAYER_REQS = {
	rank: ["distance", 10],
	tier: ["rank", 3],
	rockets: ["distance", 5e7],
	rf: ["rockets", 25],
}

const LAYER_FP = {
	rank: 1,
	tier: 1,
	rockets: 0.4,
	rf: 1,
}

// Tab Data

const TABBTN_SHOWN = {
	main: function() { return true },
	achievements: function() { return true },
	rockets: function() { return (tmp.rockets ? (tmp.rockets.canRocket||player.rockets.gt(0)||player.rf.gt(0)) : false) },
}

// Achievements

const ACH_DATA = {
	rows: 3,
	cols: 5,
	descs: {
		11: "Go at least 100m.",
		12: "Do a rank reset.",
		13: "Do a tier reset.",
		14: "Do a rocket reset.",
		15: "Get at least 1 rocket fuel.",
		
		21: "Go at least 500km.",
		22: "Reach Rank 8.",
		23: "Reach Tier 3.",
		24: "Reach 2 Rockets.",
		25: "Get at least 2 rocket fuel.",
		
		31: "Go at least 1Tm",
		32: "Reach Rank 12",
		33: "Reach Tier 4",
		34: "Reach 10 Rockets.",
		35: "Get at least 3 rocket fuel.",
	},
	rewards: {
		12: "Acceleration is 10% higher.",
		14: "Acceleration & Maximum Velocity are 50% higher.",
		15: "Rocket gain is increased by 5%.",
		
		21: "Maximum Velocity is 10% higher.",
		23: "Acceleration is 20% higher.",
		24: "Maximum Velocity is 25% higher.", 
		
		32: "Acceleration is 80% higher.",
		34: "Rocket gain is increased by 10%.",
		35: "Acceleration is 80% higher.",
	},
}

// Update Temp Data for Achievements

for (let r=1;r<=ACH_DATA.rows;r++) {
	for (let c=1;c<=ACH_DATA.cols;c++) {
		let id = r*10+c
		TMP_DATA.ELS.push("ach"+id)
	}
}