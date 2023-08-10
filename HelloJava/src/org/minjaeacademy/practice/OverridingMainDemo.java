package org.minjaeacademy.practice;

public class OverridingMainDemo {

	/**
	 * @param args
	 * 오바라이딩 코드
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		OverridingDemo over = new OverridingDemo();
		System.out.println(over.sayHello());
		
		Cat cat = new Cat();
		System.out.println(cat.sayHello());
		
		Human human = new Human();
		
		System.out.println(human.sayHello());
	}

}
