function addTokens(input, tokens){
    
    if(typeof input === "string"){
        if(input.length <6){
            throw new Error('Input should have at least 6 characters');
        }
        
        for (const [key, value] of Object.entries(tokens[0])) {
            if(key !=="tokenName" || typeof value !== "string"){
                throw new Error(`Invalid array format`);
            }
          }
        if(!input.includes("...")){
            return input;
        }
        else {
            return input.replaceAll("...",`$\{${tokens[0].tokenName}\}`);
        }
    }
    else {
        throw new Error("Invalid input");
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;