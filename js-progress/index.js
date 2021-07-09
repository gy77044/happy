for(let i =1;i<=8;i++)
{
    if(i%2==0)
    {
        for(let j = 1; j<=8;j++)
        {
            if(j%2==0)
            {
                console.log("#");
            }
            else{
                console.log(" ");
            }
        }

    }
    else{
        for(let j = 1; j<=8;j++)
        {
            if(j%2==0)
            {
                console.log(" ");
            }
            else{
                console.log("#");
            }
        }

    }
}