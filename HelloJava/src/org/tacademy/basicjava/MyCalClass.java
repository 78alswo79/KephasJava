package org.tacademy.basicjava;

public class MyCalClass {

	public int add(int a, int b) throws MyException {
		if (a < 0 || b < 0) {
			
			throw new MyException("nagative value a or b");
		}
		return ( a + b );
	}
	
	public void onCreate() {
		
		try {
			int v = add(10,5);
		} catch (MyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	
}
