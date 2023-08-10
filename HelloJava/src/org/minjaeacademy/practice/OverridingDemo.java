package org.minjaeacademy.practice;

public class OverridingDemo {
	/*1. 수포클래스 메소드 재정의*/
	public String sayHello() {
		return "ohlllalalalalalalalaloaoaoaoao";
	}
	
	/*2. 수포클래스 메소드 재정의 못하게하기 */
	public final void sayHello2() {
	}
	
}

class Cat extends OverridingDemo {
	@Override
	public String sayHello() {
		return "야야야옹야옹야옹";
	}
	
	@Override
	public void sayHello2() {
	}
}

class Human extends OverridingDemo {
	
	@Override
	public String sayHello() {
		return "hello";
	}
	
	@Override
	public void sayHello2() {
	}
}


