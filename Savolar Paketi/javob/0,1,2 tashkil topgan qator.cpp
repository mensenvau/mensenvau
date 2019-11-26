#include<iostream>
using namespace std;
int main()
{
	
	int n;
	cin>>n;
	
	long long x=1,y=1,z=1,k,l;
	
	for(int i=1;i<n;i++)
	{
		k=x;
		x=y+z;
		l=y;
		y=k+z;
		z=l+k;
	}
	
	cout<<x+y+z;
}
