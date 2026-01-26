export const generateDomain = (name)=>{
    return name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
}