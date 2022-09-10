var var1=0, var2=1;
console.log(" fibonacci series : ");
console.log(var1);
console.log(var2);
var counter, sum;
for(counter=2; counter<=7; counter++)
{
sum=var1+var2;
console.log(sum);
var1=var2;
var2=sum;
}