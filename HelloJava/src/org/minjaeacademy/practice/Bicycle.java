package org.minjaeacademy.practice;

class Bicycle {

	protected int gear = 5;
	
	public void braking() {
		
		System.out.println("Working of Braking");
	}
	
	public void getGear() {
		
		System.out.println(gear);
	}
}


class Main extends Bicycle {
	
	public static void main(String[] args) {
		Bicycle aa = new Bicycle();
		Bicycle aa2 = new Bicycle();
		
		aa.getGear();
		aa2.braking();
		
	}
}

