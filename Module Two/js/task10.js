const numCandidates = parseInt(prompt("Enter the number of Candidates:"));
if (isNaN(numCandidates) || numCandidates <= 0) {
    console.log("No candidates provided. Exiting.");
} else {
    const candidates = [];
    for (let i = 0; i < numCandidates; i++) {
        let candName = prompt(`Enter the Name for candidate ${i + 1}`);
        if (!candName) candName = `Candidate ${i + 1}`;
        candidates.push({ name: candName, votes: 0 });
    }

let numVoters = parseInt(prompt("Enter the number of Voters:"), 10);
if (isNaN(numVoters) || numVoters < 0){
    numVoters = 0;
}
let emptyVotes = 0;
for (let i = 0; i < numVoters; i++) {
    const voteName = prompt(`Voter ${i + 1}: Enter the name of the Candidate you want to vote:`);

    const index = candidates.findIndex(c => c.name.toLowerCase() === voteName.toLowerCase());
        if (index >= 0) {
            candidates[index].votes += 1;
        } else {
            console.log(`Invalid vote "${voteName}" — counted as empty.`);
        }
    }

    const sorted = [...candidates].sort((a, b) => b.votes - a.votes);

    const maxVotes = sorted.length ? sorted[0].votes : 0;
    const winners = sorted.filter(c => c.votes === maxVotes && maxVotes > 0).map(c => c.name);

    if (winners.length === 0) {
        console.log(`No votes were cast for any candidate.`);
    } else if (winners.length === 1) {
        console.log(`The winner is ${winners[0]} with ${maxVotes} votes.`);
    } else {
        console.log(`It's a tie! Winners: ${winners.join(', ')} with ${maxVotes} votes each.`);
    }

    console.log('\nresults:');
    for (const c of sorted) {
        console.log(`${c.name}: ${c.votes} votes`);
    }
}